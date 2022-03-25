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

  const [localIndex, setLocalIndex] = useState(1)

  return (
    <MultiView activeIndex={4}>
      {({ views, total, currentIndex, setCurrentIndex, hasBack, hasNext, isLast, goForward, goBack }) => (
        <>
          <h1 className="mb-8 text-4xl font-bold">Tabs</h1>
          <div className="flex gap-x-10">
            <div className="flex-1 p-6 space-y-10 border border-gray-300 bg-gray-50">

              <div className="space-x-6 border-b-2 border-gray-300">
                {views.map((view, i) =>
                  <button className={`whitespace-nowrap py-4 font-medium px-1 border-b-2 font-medium text-sm -mb-[2px] ${view.isActive(currentIndex) ? 'border-indigo-600 text-indigo-600' : 'border-transparent'}`} onClick={() => setCurrentIndex(i)} key={view.viewKey}>{view.title}</button>
                )}
              </div>

              <div className="flex w-full gap-x-10">
                <View viewKey="a" title="View A" test="hello" >
                  {(context) => (
                    <div className='flex flex-col items-center justify-center w-64 h-64 font-medium text-green-200 bg-green-500'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
                <View viewKey="b" title="View B" test="hello" >
                  {(context) => (
                    <div className='flex flex-col items-center justify-center w-64 h-64 font-medium text-blue-200 bg-blue-500'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
                <View viewKey="c" title="View C" test="hello" >
                  {(context) => (
                    <div className='flex flex-col items-center justify-center w-64 h-64 font-medium text-purple-200 bg-purple-500'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
                <View viewKey="d" title="View D" >
                  {(context) => (
                    <div className='flex flex-col items-center justify-center w-64 h-64 font-medium text-red-200 bg-red-500'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
                <View title="Child">

                  <MultiView activeIndex={localIndex}>
                    <div className="flex flex-col gap-y-10">
                      <div>
                        <View>
                          <div className="flex items-center justify-center text-3xl w-44 h-44 bg-sky-600 text-sky-100">A</div>
                        </View>

                        <View>
                          <div className="flex items-center justify-center text-3xl text-pink-100 bg-pink-600 w-44 h-44">B</div>
                        </View>
                      </div>

                      <div className="space-x-6">
                        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100" onClick={() => setLocalIndex(0)}>Back</button>
                        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100" onClick={() => setLocalIndex(1)}>Forward</button>
                      </div>
                    </div>
                  </MultiView>

                </View>
              </div>


              <DevPanel code={({ total, currentIndex, setCurrentIndex, hasBack, hasNext, isLast, goForward, goBack })} />
            </div>

          </div>

          <button onClick={() => setIsDev(x => !x)} className="px-4 py-2 mt-2 bg-white border border-gray-300 rounded hover:bg-gray-600 hover:text-gray-50">Toggle Dev</button>
        </>
      )}
    </MultiView>
  )
}