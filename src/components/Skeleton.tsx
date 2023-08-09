const Skeleton = () => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-10 px-8 py-8 m-auto animate-pulse">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="flex items-center w-1/5 h-[550px] gap-4 pb-4 mb-6 rounded-xl bg-slate-500"
        />
      ))}
    </div>
  );
};

export { Skeleton };
