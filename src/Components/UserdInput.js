export const Message = ({ label, placeholder }) => {
    return (
        <div className="text-sm mt-5 w-full">
            <label className="text-border mt-4font-semibold">{label}</label>
            <textarea
                className="w-full  h-40 mt-2 p-6 bg-main border border-border rounded"
                placeholder={placeholder}
            >
            </textarea>
        </div>
    );
};

export const Select = ({ label, option, onChange }) => {
    return (
        <>
            <label className="text-border font-semibold">{label}</label>
            <select className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded" onChange={onChange}>
                {option.map((item, i) =>
                    <option
                        key={i}
                        value={item.value}
                    >
                        {item.title}
                    </option>)}
            </select>
        </>
    )
}

export const Input = ({ label, placeholder, type, bg }) => {
    return (
        <div className="text-sm w-full ">
            <label className="text-border font-semibold">{label}</label>
            <input
                required
                type={type}
                placeholder={placeholder}
                className={`w-full mt-2 text-sm p-4 text-white  ${bg ? "bg-main" : "bg-dry"} border border-border rounded`}
            />
        </div>
    )
}