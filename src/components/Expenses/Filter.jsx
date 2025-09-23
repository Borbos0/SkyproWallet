const Filter = () => (
    <div className="w-[106px] h-[92px] absolute right-0 top-[24px] p-[12px] box-border border-[0.5px] border-[#999999] rounded-[6px] shadow-[0px_20px_67px_-12px_rgba(0,0,0,0.13)] bg-white">
    <div className="w-[152px] h-[216px] flex flex-col items-start gap-1.5">
      <div className="flex rounded-[30px] bg-[#dbffe9] px-[20px] py-[8px]">
        <p className="text-[#1fa46c] font-montserrat text-xs font-normal leading-[15px] text-center">Дате</p>
      </div>
      <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
        <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center">Сумме</p>
      </div>
    </div>
  </div>
)

export default Filter;