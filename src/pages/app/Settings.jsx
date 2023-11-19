export default function Example() {
  return (
    <>
      <div className="px-4 space-y-12 my-12 sm:px-6 lg:flex-auto lg:px-0 container mx-auto">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">App</h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
            <div className="pt-6 sm:flex">
              <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Language
              </dt>
              <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div className="text-gray-900">English - CA</div>
                <button
                  type="button"
                  className="font-semibold text-orange-600 hover:text-orange-500"
                >
                  Update
                </button>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
            <div className="pt-6 sm:flex">
              <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Full name
              </dt>
              <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div className="text-gray-900">Tom Cook</div>
                <button
                  type="button"
                  className="font-semibold text-orange-600 hover:text-orange-500"
                >
                  Update
                </button>
              </dd>
            </div>
            <div className="pt-6 sm:flex">
              <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Email address
              </dt>
              <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div className="text-gray-900">tom.cook@example.com</div>
                <button type="button" className="font-semibold text-orange-600 hover:text-orange-500">
                  Update
                </button>
              </dd>
            </div>
            <div className="pt-6 sm:flex">
              <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Sign-In with Social Networks
              </dt>
              <dd className="mt-1 flex justify-end gap-x-6 sm:mt-0 sm:flex-auto">
                <button type="button" className="font-semibold text-orange-600 hover:text-orange-500">
                  Google
                </button>
                <button type="button" className="font-semibold text-orange-600 hover:text-orange-500">
                  Microsoft
                </button>
                <button type="button" className="font-semibold text-orange-600 hover:text-orange-500">
                  Facebook
                </button>
              </dd>
            </div>
            <div className="pt-6 sm:flex">
              <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Password
              </dt>
              <dd className="mt-1 flex justify-end gap-x-6 sm:mt-0 sm:flex-auto">
                <button type="button" className="font-semibold text-orange-600 hover:text-orange-500">
                  Change Password
                </button>
              </dd>
            </div>
            <div className="pt-6 sm:flex">
              <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Logout
              </dt>
              <dd className="mt-1 flex justify-end gap-x-6 sm:mt-0 sm:flex-auto">
                <button type="button" className="font-semibold text-orange-600 hover:text-orange-500">
                  Logout
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
