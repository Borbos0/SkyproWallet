const FilterCategory = () => (
    <div className="absolute right-0 top-[24px] w-[176px] h-[240px] p-[12px] box-border border-[0.5px] border-[#999999] rounded-[6px] shadow-[0px_20px_67px_-12px_rgba(0,0,0,0.13)] bg-white">
    <div className="w-[152px] h-[216px] flex flex-col items-start gap-1.5">
      <div className="flex rounded-[30px] bg-[#dbffe9] px-[20px] py-[8px]">
        <img className="w-[14px] h-[14px]" src="/bag.svg" alt="" />
        <p className="text-[#1fa46c] font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Еда</p>
      </div>
      <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
        <img className="w-[14px] h-[14px]" src="/car.svg" alt="" />
        <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Транспорт</p>
      </div>
      <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
        <img className="w-[14px] h-[14px]" src="/house.svg" alt="" />
        <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Жилье</p>
      </div>
      <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
        <img className="w-[14px] h-[14px]" src="/gameboy.svg" alt="" />
        <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Развлечения</p>
      </div>
      <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
        <img className="w-[14px] h-[14px]" src="/vuesax_bold_teacher.svg" alt="" />
        <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Образование</p>
      </div>
      <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
       <img className="w-[14px] h-[14px]" src="/message-text.svg" alt="" />
       <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Другое</p>
     </div>
    </div>
  </div>
)
export default FilterCategory;