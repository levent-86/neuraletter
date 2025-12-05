export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="text-center flex-col">
          {/* Main Headline */}
          <h1 className="mt-10 text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent xl:h-13">
            The Outreach Engine
          </h1>
          <h1 className="mb-10 text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent xl:h-13 mt-2">
            for Solopreneurs
          </h1>

          {/* Hero Card */}
          <div className="card bg-base-200 shadow-accent shadow-lg border border-base-content/10 xl:w-3xl min-w-2xs">
            <figure className="p-5">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-base-content/20">
                <img
                  src="https://neuraletter.com/scscreen.png"
                  alt="Scrap"
                  className="absolute h-full"
                />
                <img
                  src="https://neuraletter.com/wfscreen.png"
                  alt="Workflow"
                  className="absolute h-full [mask-image:linear-gradient(65deg,black_48%,transparent_52%)]"
                />

                {/* Add shine */}
                <div
                  className="w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{
                    maskImage:
                      'linear-gradient(65deg, transparent 49.5%, black 50%, transparent 50.5%)',
                  }}
                />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              {/* Card Title */}
              <h2 className="card-title text-2xl xl:text-4xl">
                Local-First Ecosystem
              </h2>

              {/* Card Description */}
              <p className="opacity-75 leading-relaxed max-w-xl text-xl xl:text-2xl">
                Runs entirely on your machine. Eliminate expensive SaaS
                subscriptions and turn your laptop into a complete sales
                department.
              </p>

              {/* Badges */}
              <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline badge-info text-xs">
                  Privacy Focused
                </div>
                <div className="badge badge-outline badge-info text-xs">
                  Self-Hosted
                </div>
                <div className="badge badge-outline badge-info text-xs">
                  No Costs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
