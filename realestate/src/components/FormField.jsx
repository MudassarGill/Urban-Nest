function FormField({
  label, name, type = "text", as = "input", value, onChange, error, placeholder, rows = 5,
}) {
  const shared = {
    id: name,
    name,
    value,
    onChange,
    placeholder,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? `${name}-error` : undefined,
    className: `rounded-xl border-2 bg-white px-4 py-3 outline-none focus:border-golddark ${
      error ? "border-red-500" : "border-sand"
    }`,
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      {as === "textarea" ? (
        <textarea rows={rows} {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export default FormField;