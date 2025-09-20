const NewExpens = () => (
<div>
    <div className="w-[379px] h-[618px] flex-col rounded-[30px] shadow-[0px_20px_67px_-12px_rgba(0,0,0,0.13)] bg-white mt-[116px] py-[32px] pr-[32px] pl-[34px]">
        <div className="w-[313px] h-[554px] flex flex-col items-start gap-6 bg-white">
            <h2 className="text-black font-montserrat text-2xl font-bold leading-[29px] text-center">Новый расход</h2>
            <div className="w-[313px] h-[75px] flex flex-col items-start">
                <h3 className="text-black font-montserrat text-16px font-semibold leading-[20px] text-left">Описание</h3>
                <input className="mt-[16px] w-[313px] h-[39px] box-border border-[0.5px] border-[#1fa46c] rounded-[6px] bg-[#dbffe9] p-[12px]" type="text" />
            </div>
            <div className="w-[313px] h-[141px] flex flex-col items-start gap-4">
                <h3 className="text-black font-montserrat text-base font-semibold leading-[20px] text-left">Категория</h3>
                <div className="w-[277px] h-[105px] flex flex-wrap items-start gap-1.5">
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
            <div className="w-[313px] h-[75px] flex flex-col items-start">
                <h3 className="text-black font-montserrat text-16px font-semibold leading-[20px] text-left">Дата</h3>
                <input className="mt-[16px] w-[313px] h-[39px] box-border border-[0.5px] border-[#1fa46c] rounded-[6px] bg-[#dbffe9] p-[12px]" type="text" />
            </div>
            <div className="w-[313px] h-[75px] flex flex-col items-start">
                <h3 className="text-black font-montserrat text-16px font-semibold leading-[20px] text-left">Сумма</h3>
                <input className="mt-[16px] w-[313px] h-[39px] box-border border-[0.5px] border-[#1fa46c] rounded-[6px] bg-[#dbffe9] p-[12px]" type="text" />
            </div>
            <button className="w-[313px] h-[39px] rounded-[6px] bg-[#1fa46c] p-[12px]">
                <div className="text-white font-montserrat text-xs font-semibold leading-[15px] text-center">Добавить новый расход</div>
            </button>
        </div>
    </div>
</div>
);

export default NewExpens;