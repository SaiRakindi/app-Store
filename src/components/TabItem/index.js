// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTabItem = () => {
    onClickTabItem(tabId)
  }

  const tabClassName = isActive ? 'active tab-button' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" className={tabClassName} onClick={clickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
