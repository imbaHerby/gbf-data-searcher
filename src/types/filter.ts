import type { ElementType, RarityType, WeaponType } from '../enums/constant';

export interface FilterConfig {
    name: string;
    element: ElementType;
    rarity: RarityType;
    weaponType: WeaponType;
    weaponCategory: number;
    skillFilter: {
        category: number;
        tag: string;
        skill: number;
    };
}
