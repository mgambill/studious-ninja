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
          <h1 className="mb-8 text-4xl font-bold">Stepper</h1>
          <div className="flex gap-x-10">
            <div className="flex-1 p-6 space-y-10 border border-gray-300 bg-gray-50">
              <h1 className="text-2xl font-bold">View {currentIndex + 1} / 4</h1>


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
                    <div className='flex flex-col items-center justify-center w-64 h-64 font-medium text-purple-200 bg-purple-500'>
                      <p className="text-xl">{context.title}</p>
                      <DevPanel isDev={isDev} code={context} />
                    </div>
                  )}
                </View>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-600 hover:text-gray-50" onClick={goBack}>Prev</button>
                {!isLast && <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-600 hover:text-gray-50" onClick={goForward}>Next</button>}
                {isLast && <button className="px-4 py-2 bg-green-600 border border-gray-300 rounded hover:bg-green-700 text-green-50">Submit</button>}
              </div>
              <div>
                <p className="pb-2 font-medium">Go Directly</p>
                <div className="space-x-6">
                  {views.map((view, i) =>
                    <button className="w-10 h-10 font-medium border border-gray-300 hover:bg-green-600 hover:text-green-50" onClick={() => setCurrentIndex(i)} key={view.viewKey}>{i}</button>
                  )}
                </div>
              </div>
              <DevPanel code={({ total, currentIndex, setCurrentIndex, hasBack, hasNext, isLast, goForward, goBack })} />
            </div>
            <div className="p-6 border border-gray-300 divide-y-2 w-72 bg-gray-50">
              {views.map(view =>
                <div className="py-4">
                  <p className={`${view.isActive(currentIndex) ? 'font-medium text-blue-700' : ''}`}> {view.title} </p>
                  <DevPanel className="text-xs" key={view.viewKey} code={view} > <br />isActive: {view.isActive(currentIndex) ? 'true' : 'false'}</DevPanel>
                </div>
              )}
            </div>



          </div>

          <button onClick={() => setIsDev(x => !x)} className="px-4 py-2 mt-2 bg-white border border-gray-300 rounded hover:bg-gray-600 hover:text-gray-50">Toggle Dev</button>
        </>
      )}
    </MultiView>
  )
}