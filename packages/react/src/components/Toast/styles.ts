import { keyframes, styled } from '../../styles'
import * as RawToast from '@radix-ui/react-toast'

export const ToastContainer = styled('div', {})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + $space$6))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + $space$6))` },
})

export const ToastRoot = styled(RawToast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  padding: '$3 $5',
  border: '3px solid $gray600',

  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(RawToast.Title, {
  gridArea: 'title',
  marginBottom: '$1',
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$xl',
  fontFamily: '$default',
  lineHeight: '$base',
})

export const ToastDescription = styled(RawToast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray200',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  fontFamily: '$default',
})

export const ToastClose = styled(RawToast.Close, {
  color: '$gray200',
  backgroundColor: 'transparent',
  lineHeight: 0,
  cursor: 'pointer',

  '&:hover': {
    color: '$white',
  },
})

export const ToastAction = styled(RawToast.Action, {
  gridArea: 'action',
})

export const ToastViewport = styled(RawToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: 10,
  width: 390,
  maxWidth: '80vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
  overflow: 'hidden',
})
