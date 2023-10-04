import React from "react";
import VARIANTS, { temp } from './variants';

export const ICON_VARIANTS: typeof VARIANTS = VARIANTS;
export type LIcon = (typeof temp)[number];

const SIZES: any = {
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 48,
    xxlarge: 64,
};

export const ICON_SIZES = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
    xxlarge: 'xxlarge',
};
export type IconsProps = {
    variantName: LIcon,
    size: keyof typeof SIZES,
    color?: string,  
};


const Icon: React.FC<IconsProps> = ({
    variantName,
    size,
    color,
}) => {
    const IconVariant = ICON_VARIANTS[variantName];

    return (
        <svg width={SIZES[size]} height={SIZES[size]} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg/"  >
            {IconVariant.path ? (
                IconVariant.path.map((data: any) => {
                    if (!IconVariant.notChangeColor) {
                        data.fill = color;
                    }
                    return <path key={data.d} {...data} />;
                } )
            ) : (
                <path {...IconVariant} fill={color} />
            )}
        </svg>
    );
};

Icon.VARIANTS = VARIANTS;


export default Icon;