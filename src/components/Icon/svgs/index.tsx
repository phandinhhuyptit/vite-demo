import { IconName } from '@type/ui';
import { FC, SVGProps } from 'react';

import { ReactComponent as IconAdd } from './icons/ic-add.svg';
import { ReactComponent as IconAddressBook } from './icons/ic-address-book.svg';
import { ReactComponent as IconAppGaia } from './icons/ic-app-gaia.svg';
import { ReactComponent as IconAppGaiaV2 } from './icons/ic-app-gaia-v2.svg';
import { ReactComponent as IconAppHarvest } from './icons/ic-app-harvest.svg';
import { ReactComponent as IconApps } from './icons/ic-apps.svg';
import { ReactComponent as IconArrange } from './icons/ic-arrange.svg';
import { ReactComponent as IconArrow } from './icons/ic-arrow.svg';
import { ReactComponent as IconArrowBold } from './icons/ic-arrow-bold.svg';
import { ReactComponent as IconArrowGradient } from './icons/ic-arrow-gradient.svg';
import { ReactComponent as IconArrowGradientFill } from './icons/ic-arrow-gradient-fill.svg';
import { ReactComponent as IconArrowLong } from './icons/ic-arrow-long.svg';
import { ReactComponent as IconArrowThick } from './icons/ic-arrow-thick.svg';
import { ReactComponent as IconArrowThin } from './icons/ic-arrow-thin.svg';
import { ReactComponent as IconArrowTriangle } from './icons/ic-arrow-triangle.svg';
import { ReactComponent as IconAudited } from './icons/ic-audited.svg';
import { ReactComponent as IconAvatar } from './icons/ic-avatar.svg';
import { ReactComponent as IconBug } from './icons/ic-bug.svg';
import { ReactComponent as IconBurn } from './icons/ic-burn.svg';
import { ReactComponent as IconChartOutlined } from './icons/ic-chart-outlined.svg';
import { ReactComponent as IconCircleV } from './icons/ic-circle-v.svg';
import { ReactComponent as IconCircleXOutline } from './icons/ic-circle-v-outline.svg';
import { ReactComponent as IconCircleX } from './icons/ic-circle-x.svg';
import { ReactComponent as IconClear } from './icons/ic-clear.svg';
import { ReactComponent as IconClone } from './icons/ic-clone.svg';
import { ReactComponent as IconComment } from './icons/ic-comment.svg';
import { ReactComponent as IconCompare } from './icons/ic-compare.svg';
import { ReactComponent as IconCompareActive } from './icons/ic-compare-active.svg';
import { ReactComponent as IconConnect } from './icons/ic-connect.svg';
import { ReactComponent as IconContract } from './icons/ic-contract.svg';
import { ReactComponent as IconCopy } from './icons/ic-copy.svg';
import { ReactComponent as IconCoverage } from './icons/ic-coverage.svg';
import { ReactComponent as IconDay } from './icons/ic-day.svg';
import { ReactComponent as IconDiscord } from './icons/ic-discord.svg';
import { ReactComponent as IconDiscover } from './icons/ic-discover.svg';
import { ReactComponent as IconDots } from './icons/ic-dots.svg';
import { ReactComponent as IconDoubleArrow } from './icons/ic-double-arrow.svg';
import { ReactComponent as IconDownload } from './icons/ic-download.svg';
import { ReactComponent as IconEdit } from './icons/ic-edit.svg';
import { ReactComponent as IconEmail } from './icons/ic-email.svg';
import { ReactComponent as IconEmailOutline } from './icons/ic-email-outline.svg';
import { ReactComponent as IconEmailSent } from './icons/ic-email-sent.svg';
import { ReactComponent as IconEmailSolid } from './icons/ic-email-solid.svg';
import { ReactComponent as IconEnter } from './icons/ic-enter.svg';
import { ReactComponent as IconError } from './icons/ic-error.svg';
import { ReactComponent as IconErrorX } from './icons/ic-error-x.svg';
import { ReactComponent as IconEtherumOutlined } from './icons/ic-etherum-outlined.svg';
import { ReactComponent as IconExchange } from './icons/ic-exchange.svg';
import { ReactComponent as IconExpand } from './icons/ic-expand.svg';
import { ReactComponent as IconEye } from './icons/ic-eye.svg';
import { ReactComponent as IconFilter } from './icons/ic-filter.svg';
import { ReactComponent as IconFly } from './icons/ic-fly.svg';
import { ReactComponent as IconGas } from './icons/ic-gas.svg';
import { ReactComponent as IconGasOutlined } from './icons/ic-gas-outlined.svg';
import { ReactComponent as IconHeart } from './icons/ic-heart.svg';
import { ReactComponent as IconHide } from './icons/ic-hide.svg';
import { ReactComponent as IconInfo } from './icons/ic-info.svg';
import { ReactComponent as IconInfoBold } from './icons/ic-info-bold.svg';
import { ReactComponent as IconInfoSolid } from './icons/ic-info-solid.svg';
import { ReactComponent as IconInfoThin } from './icons/ic-info-thin.svg';
import { ReactComponent as IconLayout } from './icons/ic-layout.svg';
import { ReactComponent as IconLike } from './icons/ic-like.svg';
import { ReactComponent as IconLineArrow } from './icons/ic-line-arrow.svg';
import { ReactComponent as IconLineGraph } from './icons/ic-line-graph.svg';
import { ReactComponent as IconLoading } from './icons/ic-loading.svg';
import { ReactComponent as IconLockOutlined } from './icons/ic-lock-outlined.svg';
import { ReactComponent as IconMarket } from './icons/ic-market.svg';
import { ReactComponent as IconMedium } from './icons/ic-medium.svg';
import { ReactComponent as IconMenu } from './icons/ic-menu.svg';
import { ReactComponent as IconNight } from './icons/ic-night.svg';
import { ReactComponent as IconNoResult } from './icons/ic-no-result.svg';
import { ReactComponent as IconPercent } from './icons/ic-percent.svg';
import { ReactComponent as IconPieGraph } from './icons/ic-pie-graph.svg';
import { ReactComponent as IconPin } from './icons/ic-pin.svg';
import { ReactComponent as IconPinned } from './icons/ic-pinned.svg';
import { ReactComponent as IconPlus } from './icons/ic-plus.svg';
import { ReactComponent as IconPortfolio } from './icons/ic-portfolio.svg';
import { ReactComponent as IconProfile } from './icons/ic-profile.svg';
import { ReactComponent as IconProxyAccount } from './icons/ic-proxy-account.svg';
import { ReactComponent as IconRatingHigh } from './icons/ic-rating-high.svg';
import { ReactComponent as IconRatingLow } from './icons/ic-rating-low.svg';
import { ReactComponent as IconRatingMedium } from './icons/ic-rating-medium.svg';
import { ReactComponent as IconReddit } from './icons/ic-reddit.svg';
import { ReactComponent as IconRefresh } from './icons/ic-refresh.svg';
import { ReactComponent as IconRevoke } from './icons/ic-revoke.svg';
import { ReactComponent as IconReweet } from './icons/ic-reweet.svg';
import { ReactComponent as IconSadFace } from './icons/ic-sad-face.svg';
import { ReactComponent as IconSearch } from './icons/ic-search.svg';
import { ReactComponent as IconSettings } from './icons/ic-settings.svg';
import { ReactComponent as IconShare } from './icons/ic-share.svg';
import { ReactComponent as IconSignOut } from './icons/ic-sign-out.svg';
import { ReactComponent as IconSlash } from './icons/ic-slash.svg';
import { ReactComponent as IconSort } from './icons/ic-sort.svg';
import { ReactComponent as IconSpinner } from './icons/ic-spinner.svg';
import { ReactComponent as IconSwap } from './icons/ic-swap.svg';
import { ReactComponent as IconTelegram } from './icons/ic-telegram.svg';
import { ReactComponent as IconTick } from './icons/ic-tick.svg';
import { ReactComponent as IconTrash } from './icons/ic-trash.svg';
import { ReactComponent as IconTwitter } from './icons/ic-twitter.svg';
import { ReactComponent as IconUnhide } from './icons/ic-unhide.svg';
import { ReactComponent as IconUpload } from './icons/ic-upload.svg';
import { ReactComponent as IconUsd } from './icons/ic-usd.svg';
import { ReactComponent as IconVisitSolid } from './icons/ic-visit-solid.svg';
import { ReactComponent as IconVisitThin } from './icons/ic-visit-thin.svg';
import { ReactComponent as IconWallet } from './icons/ic-wallet.svg';
import { ReactComponent as IconWalletHolder } from './icons/ic-wallet-holder.svg';
import { ReactComponent as IconWalletOutlined } from './icons/ic-wallet-outlined.svg';
import { ReactComponent as IconWarning } from './icons/ic-warning.svg';
import { ReactComponent as IconWarningOutline } from './icons/ic-warning-outline.svg';
import { ReactComponent as IconWarningTriangle } from './icons/ic-warning-triangle.svg';
import { ReactComponent as IconX } from './icons/ic-x.svg';

const ICONS: Record<
  IconName,
  FC<SVGProps<SVGSVGElement> & { title?: string }>
> = {
  'ic-add': IconAdd,
  'ic-address-book': IconAddressBook,
  'ic-app-gaia': IconAppGaia,
  'ic-app-gaia-v2': IconAppGaiaV2,
  'ic-app-harvest': IconAppHarvest,
  'ic-apps': IconApps,
  'ic-arrange': IconArrange,
  'ic-arrow-triangle': IconArrowTriangle,
  'ic-arrow-gradient-fill': IconArrowGradientFill,
  'ic-arrow-gradient': IconArrowGradient,
  'ic-arrow-thick': IconArrowThick,
  'ic-arrow-thin': IconArrowThin,
  'ic-arrow': IconArrow,
  'ic-audited': IconAudited,
  'ic-avatar': IconAvatar,
  'ic-bug': IconBug,
  'ic-burn': IconBurn,
  'ic-circle-x': IconCircleX,
  'ic-compare-active': IconCompareActive,
  'ic-compare': IconCompare,
  'ic-connect': IconConnect,
  'ic-copy': IconCopy,
  'ic-coverage': IconCoverage,
  'ic-clone': IconClone,
  'ic-day': IconDay,
  'ic-discord': IconDiscord,
  'ic-discover': IconDiscover,
  'ic-dots': IconDots,
  'ic-double-arrow': IconDoubleArrow,
  'ic-enter': IconEnter,
  'ic-edit': IconEdit,
  'ic-exchange': IconExchange,
  'ic-expand': IconExpand,
  'ic-eye': IconEye,
  'ic-filter': IconFilter,
  'ic-info-solid': IconInfoSolid,
  'ic-info-thin': IconInfoThin,
  'ic-info': IconInfo,
  'ic-like': IconLike,
  'ic-layout': IconLayout,
  'ic-line-arrow': IconLineArrow,
  'ic-line-graph': IconLineGraph,
  'ic-market': IconMarket,
  'ic-medium': IconMedium,
  'ic-menu': IconMenu,
  'ic-night': IconNight,
  'ic-no-result': IconNoResult,
  'ic-percent': IconPercent,
  'ic-pie-graph': IconPieGraph,
  'ic-plus': IconPlus,
  'ic-portfolio': IconPortfolio,
  'ic-pin': IconPin,
  'ic-pinned': IconPinned,
  'ic-profile': IconProfile,
  'ic-rating-high': IconRatingHigh,
  'ic-rating-low': IconRatingLow,
  'ic-rating-medium': IconRatingMedium,
  'ic-reddit': IconReddit,
  'ic-search': IconSearch,
  'ic-settings': IconSettings,
  'ic-share': IconShare,
  'ic-sign-out': IconSignOut,
  'ic-slash': IconSlash,
  'ic-sort': IconSort,
  'ic-spinner': IconSpinner,
  'ic-swap': IconSwap,
  'ic-telegram': IconTelegram,
  'ic-tick': IconTick,
  'ic-trash': IconTrash,
  'ic-twitter': IconTwitter,
  'ic-usd': IconUsd,
  'ic-visit-solid': IconVisitSolid,
  'ic-visit-thin': IconVisitThin,
  'ic-x': IconX,
  'ic-error': IconError,
  'ic-wallet-holder': IconWalletHolder,
  'ic-hide': IconHide,
  'ic-unhide': IconUnhide,
  'ic-loading': IconLoading,
  'ic-clear': IconClear,
  'ic-arrow-long': IconArrowLong,
  'ic-upload': IconUpload,
  'ic-wallet': IconWallet,
  'ic-arrow-bold': IconArrowBold,
  'ic-download': IconDownload,
  'ic-info-bold': IconInfoBold,
  'ic-circle-v': IconCircleV,
  'ic-warning': IconWarning,
  'ic-warning-triangle': IconWarningTriangle,
  'ic-email': IconEmail,
  'ic-email-solid': IconEmailSolid,
  'ic-email-sent': IconEmailSent,
  'ic-email-outline': IconEmailOutline,
  'ic-sad-face': IconSadFace,
  'ic-refresh': IconRefresh,
  'ic-revoke': IconRevoke,
  'ic-fly': IconFly,
  'ic-warning-outline': IconWarningOutline,
  'ic-error-x': IconErrorX,
  'ic-circle-v-outline': IconCircleXOutline,
  'ic-comment': IconComment,
  'ic-heart': IconHeart,
  'ic-reweet': IconReweet,
  'ic-chart-outlined': IconChartOutlined,
  'ic-lock-outlined': IconLockOutlined,
  'ic-gas-outlined': IconGasOutlined,
  'ic-wallet-outlined': IconWalletOutlined,
  'ic-proxy-account': IconProxyAccount,
  'ic-etherum-outlined': IconEtherumOutlined,
  'ic-contract': IconContract,
  'ic-gas': IconGas,
};

export default ICONS;
