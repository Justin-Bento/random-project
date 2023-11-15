export default function Bookmarks() {
  return (
    <>
      <div className="xl:container xl:mx-auto px-16 pt-16">
        <h1 className="scroll-m-20 pb-2 text-3xl font-bold tracking-normal first:mt-0">
          Title That Best Suits Bookmarks Category
        </h1>
        <p className=" leading-7 tracking-wide text-zinc-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse
          eveniet libero, voluptas unde voluptatum eaque, debitis quisquam porro
          voluptate reprehenderit possimus nam consequuntur. Assumenda aut
          dolore sapiente minima vitae!
        </p>
        <div className="mt-10 flex flex-col gap-10">
          <div data-scan-bookmark className="ring-1 ring-zinc-400 p-4 rounded">
            {/* Content related to bookmarks should inside this folder should go here. */}
          </div>
          <div data-scan-bookmark className="ring-1 ring-zinc-400 p-4 rounded">
            {/* Content related to bookmarks should inside this folder should go here. */}
          </div>
          <div data-scan-bookmark className="ring-1 ring-zinc-400 p-4 rounded">
            {/* Content related to bookmarks should inside this folder should go here. */}
          </div>
          <div data-scan-bookmark className="ring-1 ring-zinc-400 p-4 rounded">
            {/* Content related to bookmarks should inside this folder should go here. */}
          </div>
        </div>
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h1 className="scroll-m-20 inline-block pb-2 text-3xl font-bold tracking-normal first:mt-0">
              Suggestions for Bookmark Inside Folder
            </h1>
            <div className="flex items-center gap-4">
              <div className="ring-1 ring-zinc-400 rounded w-4 h-4 p-4"></div>
              <div className="ring-1 ring-zinc-400 rounded w-4 h-4 p-4"></div>
              <div className="ring-1 ring-zinc-400 rounded w-4 h-4 p-4"></div>
            </div>
          </div>
          <p className=" leading-7 tracking-wide text-zinc-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse
            eveniet libero, voluptas unde voluptatum eaque, debitis quisquam
            porro voluptate reprehenderit possimus nam consequuntur. Assumenda
            aut dolore sapiente minima vitae!
          </p>
          <div className="mt-10 flex flex-col gap-10">
            <div
              data-scan-bookmark
              className="ring-1 ring-zinc-400 p-4 rounded"
            >
              {/* Content related to bookmarks should inside this folder should go here. */}
            </div>
            <div
              data-scan-bookmark
              className="ring-1 ring-zinc-400 p-4 rounded"
            >
              {/* Content related to bookmarks should inside this folder should go here. */}
            </div>
            <div
              data-scan-bookmark
              className="ring-1 ring-zinc-400 p-4 rounded"
            >
              {/* Content related to bookmarks should inside this folder should go here. */}
            </div>
            <div
              data-scan-bookmark
              className="ring-1 ring-zinc-400 p-4 rounded"
            >
              {/* Content related to bookmarks should inside this folder should go here. */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
