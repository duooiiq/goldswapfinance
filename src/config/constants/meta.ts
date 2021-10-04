import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'GoldSwap',
  description:
    'GoldSwap, Gold In A App',
  image: 'https://i.ibb.co/ZJLLPd8/1633274756949.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('GoldSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('GoldSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('GoldSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('GoldSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('GoldSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('GoldSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('GoldSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('GoldSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('GoldSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('GoldSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('GoldSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('GoldSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('GoldSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('GoldSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('GoldSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('GoldSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('GoldSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('GoldSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('GoldSwap Info & Analytics')}`,
        description: 'View statistics for Goldswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('GoldSwap Info & Analytics')}`,
        description: 'View statistics for Goldswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('GoldSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('PancakeSwap')}`,
      }
    default:
      return null
  }
}
