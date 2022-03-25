import { useState, useEffect, createContext, useContext } from 'react'

export const MultiViewContext = createContext({
  views: [],
  activeIndex: 0,
  setActiveIndex: () => { },
  register: () => { }
})

export function MultiView({ activeIndex, children }) {
  const [currentIndex, setCurrentIndex] = useState(activeIndex ?? 0)
  const [views, setViews] = useState([])
  const _views = []
  const context = {
    currentIndex,
    register: (view) => {
      const index = _views.length
      const isActive = (_currentIndex) => _currentIndex === index

      console.log('register', view, { index, isActive }, _views)
      _views.push({ ...view, $index: index, isActive })
      return index
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setViews(a => [...a, ..._views])
    }, 5)
  }, [])


  useEffect(() => {
    setCurrentIndex(activeIndex)
    console.log(views, currentIndex)
  }, [activeIndex])

  const hasBack = currentIndex > 0
  const hasNext = currentIndex < views.length - 1
  const isLast = currentIndex === views.length - 1
  const total = views.length
  const goForward = () => { console.log('goForward'); if (hasNext) setCurrentIndex(i => i + 1); }
  const goBack = () => { console.log('goBack'); if (hasBack) setCurrentIndex(i => i - 1); }
  return (
    <MultiViewContext.Provider value={context}>{typeof (children) === 'function' ? children({ views, setCurrentIndex, total, currentIndex, hasBack, hasNext, isLast, goForward, goBack }) : children}</MultiViewContext.Provider>
  )
}

export function View(props) {
  const { children, ...rest } = props
  const [index, setIndex] = useState(0)
  const { currentIndex, register } = useContext(MultiViewContext)
  useEffect(() => {
    var i = register(rest)
    setIndex(i)
  }, [])
  const isActive = currentIndex === index
  return isActive && (typeof (children) === 'function' ? children({ ...rest, currentIndex, index, isActive }) : children)
}
