import { useState } from "react"
import { MultiView, View } from "../Components/MultiView"
import Stepper from "./Stepper"


export default (props) => {
  const [isDev, setIsDev] = useState(false)
  const DevPanel = ({ code, className, children }) => {
    return (
      <pre className={` block ${isDev ? '' : 'hidden'} ${className}`}>{JSON.stringify(code, null, 2)}{children}</pre>
    )
  }
  return (
    <MultiView>
      {({ views, total, currentIndex, setCurrentIndex, hasBack, hasNext, isLast, goForward, goBack }) => (
        <>
          <h1 className="text-4xl font-bold mb-8">Tabs</h1>
          <div className="flex gap-x-10">
            <div className="flex-1 border border-gray-300 p-6 bg-gray-50 space-y-10">

              <div className="space-x-6 border-b-2 border-gray-300">
                {views.map((view, i) =>
                  <button className={`whitespace-nowrap py-4 font-medium px-1 border-b-2 font-medium text-sm -mb-[2px] ${view.isActive(currentIndex) ? 'border-indigo-600 text-indigo-600' : 'border-transparent'}` } onClick={() => setCurrentIndex(i)} key={view.viewKey}>{view.title}</button>
                )}
              </div>

              <div className="gap-x-10 flex w-full">
                <View viewKey="a" title="View A" test="hello" >
                  {(context) => (
                    <div className='w-64 h-64 bg-green-500 text-green-200 flex flex-col justify-center items-center font-medium'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
                <View viewKey="b" title="View B" test="hello" >
                  {(context) => (
                    <div className='w-64 h-64 bg-blue-500 text-blue-200 flex flex-col justify-center items-center font-medium'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
                <View viewKey="c" title="View C" test="hello" >
                  {(context) => (
                    <div className='w-64 h-64 bg-purple-500 text-purple-200 flex flex-col justify-center items-center font-medium'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
                <View viewKey="d" title="View D" >
                  {(context) => (
                    <div className='w-64 h-64 bg-purple-500 text-purple-200 flex flex-col justify-center items-center font-medium'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
              </div>


              <DevPanel code={({ total, currentIndex, setCurrentIndex, hasBack, hasNext, isLast, goForward, goBack })} />
            </div>

          </div>

          <button onClick={() => setIsDev(x => !x)} className="hover:bg-gray-600 hover:text-gray-50 mt-2 px-4 py-2 rounded bg-white border border-gray-300">Toggle Dev</button>
        </>
      )}
    </MultiView>
  )
}