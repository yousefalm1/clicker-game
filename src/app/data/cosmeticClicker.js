import { ReactComponent as BoxerIcon } from '../assets/svg/Boxer.svg';
import { ReactComponent as CardIcon } from '../assets/svg/currencyCoin.svg';
import { ReactComponent as CookieIcon } from '../assets/svg/Cookie.svg';
import { ReactComponent as DiamondIcon } from '../assets/svg/diamond.svg';
import { ReactComponent as GoldCoinIcon } from '../assets/svg/gold-coin.svg';
import { ReactComponent as MonsterIcon } from '../assets/svg/Monster.svg';
import { ReactComponent as ReactIcon } from '../assets/svg/React.svg';
import { ReactComponent as TreasureChestIcon } from '../assets/svg/TreasureChest.svg';
import { ReactComponent as TreeIcon } from '../assets/svg/tree.svg';
import { ReactComponent as ZombieIcon } from '../assets/svg/Zombie.svg';

const cosmeticUpgrades = [
  {
    id: 'clicker_boxer',
    name: 'Boxer Clicker',
    description: 'Punch your way to success!',
    cost: 500,
    IconComponent: BoxerIcon,
  },
  {
    id: 'clicker_card',
    name: 'Card Clicker',
    description: 'Shuffle and deal with every click.',
    cost: 300,
    IconComponent: CardIcon,
  },
  {
    id: 'clicker_cookie',
    name: 'Cookie Clicker',
    description: 'A tasty clicker for sweet rewards.',
    cost: 200,
    IconComponent: CookieIcon,
  },
  {
    id: 'clicker_diamond',
    name: 'Diamond Clicker',
    description: 'Shine bright with each click.',
    cost: 1000,
    IconComponent: DiamondIcon,
  },
  {
    id: 'clicker_gold_coin',
    name: 'Gold Coin Clicker',
    description: 'Collect gold with every touch.',
    cost: 600,
    IconComponent: GoldCoinIcon,
  },
  {
    id: 'clicker_monster',
    name: 'Monster Clicker',
    description: 'Unleash the beast within.',
    cost: 700,
    IconComponent: MonsterIcon,
  },
  {
    id: 'clicker_react',
    name: 'React Clicker',
    description: 'Component-driven clicking fun.',
    cost: 400,
    IconComponent: ReactIcon,
  },
  {
    id: 'clicker_treasure_chest',
    name: 'Treasure Chest Clicker',
    description: 'Unlock treasures with each click.',
    cost: 800,
    IconComponent: TreasureChestIcon,
  },
  {
    id: 'clicker_tree',
    name: 'Tree Clicker',
    description: 'Grow your fortune organically.',
    cost: 250,
    IconComponent: TreeIcon,
  },
  {
    id: 'clicker_zombie',
    name: 'Zombie Clicker',
    description: 'Rise to the top with the undead.',
    cost: 550,
    IconComponent: ZombieIcon,
  },
];

export default cosmeticUpgrades;
