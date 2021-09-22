import { ContextApi } from 'contexts/Localization/types'
import { SaleStatusEnum } from './types'
import { getAltText, getEventStepStatus, getEventText } from './utils'

type nftSaleType = {
  t: ContextApi['t']
  saleStatus?: SaleStatusEnum
  startTimestamp?: number
}

const nftSaleConfigBuilder = ({ t, saleStatus, startTimestamp }: nftSaleType) =>
  saleStatus
    ? [
        {
          status: getEventStepStatus({ saleStatus, eventStatus: [SaleStatusEnum.Pending, SaleStatusEnum.Premint] }),
          text: getEventText({ saleStatus, eventStatus: [SaleStatusEnum.Pending, SaleStatusEnum.Premint], t }),
          infoText: t(
            'Activate your profile and make sure you  have at least 5 BNB in your wallet to buy a Minting Ticket.',
          ),
        },
        {
          status: getEventStepStatus({ saleStatus, eventStatus: [SaleStatusEnum.Presale] }),
          text: getEventText({ saleStatus, eventStatus: [SaleStatusEnum.Presale], t }),
          altText: getAltText({ t, saleStatus, eventStatus: [SaleStatusEnum.Presale], startTimestamp }),
          infoText: t(
            'During this phase, any wallet holding a Minting Ticket can redeem their ticket to mint a Pancake Squad NFT.',
          ),
        },
        {
          status: getEventStepStatus({
            saleStatus,
            eventStatus: [SaleStatusEnum.Sale, SaleStatusEnum.DrawingRandomness],
            startTimestamp,
          }),
          text: getEventText({
            saleStatus,
            startTimestamp,
            eventStatus: [SaleStatusEnum.Sale, SaleStatusEnum.DrawingRandomness],
            t,
          }),
          altText: getAltText({
            t,
            saleStatus,
            eventStatus: [SaleStatusEnum.Sale, SaleStatusEnum.DrawingRandomness],
            startTimestamp,
          }),
          infoText: t(
            'Public Sale: Any wallet with an active Pancake Profile can purchase up to 20 Minting Tickets, while stocks last.',
          ),
        },
        {
          status: getEventStepStatus({ saleStatus, eventStatus: [SaleStatusEnum.Claim] }),
          text: getEventText({ saleStatus, eventStatus: [SaleStatusEnum.Claim], t }),
          altText: getAltText({ t, saleStatus, eventStatus: [SaleStatusEnum.Claim] }),
          infoText: t(
            'Pre-sale: Wallets which held “Gen 0” Pancake Bunnies NFTs (bunnyID 0,1,2,3,4) at block xxxxxxx can purchase one Minting Ticket per Gen 0 NFT.',
          ),
        },
      ]
    : []

export default nftSaleConfigBuilder