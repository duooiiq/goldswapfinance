/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { Flex } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { DefaultTheme } from 'styled-components'
import { SaleStatusEnum, UserStatusEnum } from '../../types'
import BuyTicketsButtons from '../Buttons/BuyTickets'
import MintButton from '../Buttons/Mint'
import EndEventButtons from '../Buttons/EndEvent'
import ActivateProfileButton from '../Buttons/ActivateProfile'
import ConnectWalletButton from '../Buttons/ConnectWallet'

type PreEventProps = {
  t: ContextApi['t']
  account: string
  saleStatus: SaleStatusEnum
  userStatus: UserStatusEnum
  theme: DefaultTheme
  canClaimForGen0: boolean
  maxPerAddress: number
  maxPerTransaction: number
  numberTicketsOfUser: number
  numberTicketsForGen0: number
  numberTicketsUsedForGen0: number
  maxSupply: number
  totalSupplyMinted: number
  numberTokensOfUser: number
  cakeBalance: BigNumber
  pricePerTicket: BigNumber
  ticketsOfUser: BigNumber[]
}

const CtaButtons: React.FC<PreEventProps> = ({
  t,
  account,
  saleStatus,
  userStatus,
  theme,
  canClaimForGen0,
  maxPerAddress,
  maxPerTransaction,
  numberTicketsOfUser,
  numberTicketsForGen0,
  numberTicketsUsedForGen0,
  numberTokensOfUser,
  maxSupply,
  totalSupplyMinted,
  cakeBalance,
  pricePerTicket,
  ticketsOfUser,
}) => {
  return (
    <>
      <Flex>
        <ConnectWalletButton userStatus={userStatus} />
        <ActivateProfileButton userStatus={userStatus} t={t} />
        <BuyTicketsButtons
          t={t}
          account={account}
          theme={theme}
          userStatus={userStatus}
          saleStatus={saleStatus}
          canClaimForGen0={canClaimForGen0}
          maxPerAddress={maxPerAddress}
          numberTicketsOfUser={numberTicketsOfUser}
          numberTicketsUsedForGen0={numberTicketsUsedForGen0}
          cakeBalance={cakeBalance}
          maxPerTransaction={maxPerTransaction}
          numberTicketsForGen0={numberTicketsForGen0}
          pricePerTicket={pricePerTicket}
        />
        <MintButton
          t={t}
          theme={theme}
          saleStatus={saleStatus}
          numberTicketsOfUser={numberTicketsOfUser}
          numberTokensOfUser={numberTokensOfUser}
          ticketsOfUser={ticketsOfUser}
        />
        <EndEventButtons
          t={t}
          saleStatus={saleStatus}
          userStatus={userStatus}
          maxSupply={maxSupply}
          totalSupplyMinted={totalSupplyMinted}
          numberTokensOfUser={numberTokensOfUser}
        />
      </Flex>
    </>
  )
}

export default CtaButtons
