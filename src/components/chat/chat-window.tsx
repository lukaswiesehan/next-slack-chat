import {IntroPage} from './intro-page'

export const ChatWindow = () => {
  return (
    <div className="h-screen max-h-[40rem] w-screen max-w-96 p-4 text-slate-500 text-sm">
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white/25 to-white/20 border border-white/10 p-1">
        {/* <div className="p-3 shadow-lg">
            <User userId={userId} />
          </div> */}
        <div className="w-full h-full shadow rounded-[1.25rem] overflow-hidden bg-white flex flex-col">
          <IntroPage />
        </div>
      </div>
    </div>
  )
}
