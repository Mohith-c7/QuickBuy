export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="text-4xl font-bold mb-8">QuickBuy</div>
      <div className="w-16 h-16 border-t-4 border-b-4 border-black rounded-full animate-spin"></div>
    </div>
  )
}
