import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from 'react-tooltip'
import { useStateContext } from '../contexts/ContextProvider'

export const SettingIcon = () => {
    const { currentColor, setThemeSettings } = useStateContext()
  return (
    <>
    <div className="fixed right-4 bottom-4" style={{ zIndex: '1' }}>
        <Tooltip id="Settings" content="Settings" />
              <button data-tooltip-id="Settings"
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
     </div>         
    </>
  )
}
