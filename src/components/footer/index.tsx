export default function footer() {
  return (
    <footer className="py-4  bg-main text-white">
      <div className="container mx-auto">
        <div className="grid   gap-4 grid-cols-1 md:grid-cols-3 ">
          <div className="flex flex-col gap-2 text-center">
            <img src="https://picsum.photos/200" alt="" className="w-40 h-20 mx-auto " />
            <div>联系地址: 甘肃省兰州市</div>
            <div>联系电话: 123456789</div>
            <div>Email: 123456789@qq.com</div>
          </div>
          <div className="text-center ">
            <div>扫码关注</div>
            <div className="flex justify-center gap-2">
              <div>
                <img src="https://picsum.photos/200" alt="" className="w-20 h-20" />
              </div>
              <div>
                <img src="https://picsum.photos/200" alt="" className="w-20 h-20" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-center">友情链接</div>
          </div>
        </div>
        <div className="text-center mt-4 text-sm animate-in fade-in zoom-in font-yt">
          版权所有@兰州大学 陇ICP备10000336号-3 甘公网安备 62010202000830号
        </div>
      </div>
    </footer>
  );
}
