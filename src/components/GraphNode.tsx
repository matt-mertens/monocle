import React, { ReactElement } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/solid'
import { shortenHash } from '../utils'

export default function GraphNode(props: any, handleNodeClick: any, orientation: string): ReactElement {
  const { nodeDatum, toggleNode } = props

  const handeToggleNode = (e: any) => {
    e.stopPropagation()

    toggleNode(e)
  }

  return (
    <React.Fragment>
      <circle r={5} strokeWidth={1} style={{ stroke: '#d0d7de', fill: '#fff' }}></circle>
      <foreignObject
        width={40}
        height={1}
        x={orientation === 'horizontal' ? -2 : -23}
        y={orientation === 'horizontal' ? -23 : -2}
        style={{ overflow: 'visible', height: 'auto', width: 'auto' }}
      >
        <div
          style={{
            height: '100%',
            flexDirection: 'column',
            display: 'inline-flex',
            borderRadius: '6px',
            border: '1px solid #d0d7de',
            padding: '12px',
            paddingLeft: '28px',
            paddingRight: '28px',
            backgroundColor: '#fff',
            boxShadow: 'rgba(140,149,159,0.15) 0px 3px 6px 0px',
          }}
          onClick={() => handleNodeClick(nodeDatum)}
        >
          <div>
            <div style={{ color: 'rgba(17,24,39,1)', fontWeight: 600, fontSize: '0.875rem', display: 'flex' }}>
              {nodeDatum?.children?.length > 0 && (
                <button
                  type="button"
                  className="mr-2 inline-flex items-center p-1 border border-transparent shadow-sm border-indigo-600 stroke-indigo-600 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={{
                    textAlign: 'center',
                    marginLeft: '-22px',
                    cursor: 'pointer',
                  }}
                  onClick={handeToggleNode}
                >
                  {nodeDatum.__rd3t.collapsed ? (
                    <PlusIcon className="h-3 w-3 stroke-indigo-600 bg-white" aria-hidden="true" />
                  ) : (
                    <MinusIcon className="h-3 w-3 stroke-indigo-600 bg-white" aria-hidden="true" />
                  )}
                </button>
              )}
              {nodeDatum.path}
            </div>
            <ul
              style={{
                color: 'rgba(107,114,128,1)',
                fontWeight: 500,
                fontSize: '0.875rem',
                listStyleType: 'none',
                padding: 0,
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              {shortenHash(nodeDatum.name)}
              {/* {nodeDatum.attributes &&
                Object.entries(nodeDatum.attributes).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))} */}
            </ul>
          </div>
        </div>
      </foreignObject>
    </React.Fragment>
  )
}