const Treatments = ({ children }) => (
  <section id="treatments" className="mt-5 py-7 pl-5 pr-5 text-center">
    <h2 className="text-secondary-500 text-4xl font-bold mb-3">Tratamientos</h2>

    <div className="flex flex-col justify-center content-evenly items-center pt-5 pb-12 md:flex-row md:flex-wrap">
      {children}
    </div>
  </section>
);

export default Treatments;
