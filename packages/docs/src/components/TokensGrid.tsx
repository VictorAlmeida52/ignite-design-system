import '../styles/tokens-grid.css'
import { Unstyled } from '@storybook/blocks'
import * as tokens from '@vhalmeida-ui/tokens'
import { colors, fontSizes } from '@vhalmeida-ui/tokens'
import React from 'react'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  tokenType?: keyof typeof tokens
}

function getPixelSize(remString: string) {
  return Number(remString.replace('rem', '')) * 16
}

function getGlobalTBodyStyle(
  tokenType: keyof typeof tokens | undefined,
  value: string,
): React.CSSProperties {
  console.log(tokenType)
  switch (tokenType) {
    case 'fontSizes':
      return {
        fontSize: value,
      }
    case 'fontWeights':
      return {
        fontWeight: value,
      }
    case 'lineHeights':
      return {
        lineHeight: value,
      }
    case 'fonts':
      return {
        fontFamily: value,
        fontSize: fontSizes.md,
      }
    default:
      return {}
  }
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  tokenType,
}: TokensGridProps) {
  return (
    <Unstyled>
      <table className={'tokens-grid'}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            {hasRemValue && <th>Pixels</th>}
            {hasRemValue && <th></th>}
          </tr>
        </thead>

        <tbody>
          {Object.entries(tokens).map(([key, value]) => {
            console.log(getGlobalTBodyStyle(tokenType, value))
            return (
              <tr key={key} style={getGlobalTBodyStyle(tokenType, value)}>
                <td>${key}</td>
                <td>{value}</td>
                {hasRemValue && <td>{getPixelSize(value)}px</td>}
                {hasRemValue && tokenType === 'space' && (
                  <td>
                    <div
                      style={{
                        width: `${getPixelSize(value)}px`,
                        background: 'cyan',
                        height: '10px',
                      }}
                    />
                  </td>
                )}
                {hasRemValue && tokenType === 'fontSizes' && (
                  <td>
                    <p>Lorem</p>
                  </td>
                )}
                {tokenType === 'fontWeights' && (
                  <td>
                    <p>Lorem ipsum</p>
                  </td>
                )}
                {tokenType === 'radii' && (
                  <td>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: colors.ignite300,
                        borderRadius: value,
                      }}
                    />
                  </td>
                )}
                {tokenType === 'lineHeights' && (
                  <td>
                    <p style={{ backgroundColor: `${colors.gray400}33` }}>
                      Lorem ipsum
                    </p>
                    <p style={{ backgroundColor: `${colors.gray400}33` }}>
                      Dolor sit amet
                    </p>
                  </td>
                )}
                {tokenType === 'fonts' && (
                  <td>
                    <p>Lorem ipsum dolor sit amet</p>
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Unstyled>
  )
}
