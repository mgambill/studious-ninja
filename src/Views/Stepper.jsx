import { useState } from "react"
import { MultiView, View } from "../Components/MultiView"


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
          <h1 className="text-4xl font-bold">Stepper</h1>
          <div className="flex gap-x-10">
            <div className="flex-1 border border-gray-300 p-6 bg-gray-50 space-y-10">
              <h1 className="text-2xl font-bold">View {currentIndex + 1} / 4</h1>


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
              <div className="space-x-4 flex">
                <button className="hover:bg-gray-600 hover:text-gray-50 px-4 py-2 rounded bg-white border border-gray-300" onClick={goBack}>Prev</button>
                {!isLast && <button className="hover:bg-gray-600 hover:text-gray-50 px-4 py-2 rounded bg-white border border-gray-300" onClick={goForward}>Next</button>}
                {isLast && <button className="hover:bg-green-700 px-4 py-2 rounded bg-green-600 text-green-50 border border-gray-300">Submit</button>}
              </div>
              <div>
                <p className="font-medium pb-2">Go Directly</p>
                <div className="space-x-6">
                  {views.map((view, i) =>
                    <button className="h-10 w-10 border border-gray-300 hover:bg-green-600 hover:text-green-50 font-medium" onClick={() => setCurrentIndex(i)} key={view.viewKey}>{i}</button>
                  )}
                </div>
              </div>
              <DevPanel code={({ total, currentIndex, setCurrentIndex, hasBack, hasNext, isLast, goForward, goBack })} />
            </div>
            <div className="w-72 border border-gray-300 p-6 bg-gray-50 divide-y-2">
              {views.map(view =>
                <div className="py-4">
                  <p className={`${view.isActive(currentIndex) ? 'font-medium text-blue-700' : ''}`}> {view.title} </p>
                  <DevPanel className="text-xs" key={view.viewKey} code={view} > <br />isActive: {view.isActive(currentIndex) ? 'true' : 'false'}</DevPanel>
                </div>
              )}
            </div>



          </div>

          <button onClick={() => setIsDev(x => !x)} className="hover:bg-gray-600 hover:text-gray-50 mt-2 px-4 py-2 rounded bg-white border border-gray-300">Toggle Dev</button>
        </>
      )}
    </MultiView>
  )
}