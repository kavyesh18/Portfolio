const FloatingInput = (props: { id: string; name: string; value: string; handleChange: (id: string, value: string) => void; error?: string }) => {
  return (
      <div className="relative">
          {props.id !== "message" ? (
              <input
                  type="text"
                  id={props.id}
                  value={props.value}
                  onChange={(e) => props.handleChange(props.id, e.target.value)}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border ${props.error ? 'border-red-500' : 'border-textColor'} hover:shadow-[0_0_5px_0_#64FFDA50] appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
                  placeholder=""
              />
          ) : (
              <textarea
                  id={props.id}
                  value={props.value}
                  onChange={(e) => props.handleChange(props.id, e.target.value)}
                  rows={4}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border ${props.error ? 'border-red-500' : 'border-textColor'} hover:shadow-[0_0_8px_0_#64FFDA50] appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
              />
          )}
          <label
              htmlFor={props.id}
              className="absolute text-xl text-textColor duration-300 transform -translate-y-4 scale-90 top-3 z-10 origin-[0] bg-bg px-2 peer-focus:px-2 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
              {props.name}
          </label>
          {props.error && <p className="text-red-500 text-sm mt-1">{props.error}</p>}
      </div>
  );
};

export default FloatingInput;
