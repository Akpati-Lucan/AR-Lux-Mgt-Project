import BackgroundCollage from './BackgroundCollage/BackgroundCollage'

const MobileHomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundCollage />
      <div className="flex items-center justify-center h-screen absolute inset-0">
        <p className="text-white text-3xl text-center">
          LET OUR EXPERTS TAKE YOU TO THE NEXT LEVEL
        </p>
      </div>
    </div>
  )
}

export default MobileHomePage