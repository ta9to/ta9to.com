const profile = {
  name: 'Takuto Kudo@Nyle Inc.',
  imageUrl:
      '/profile.jpg',
  coverImageUrl:
      '/taro.jpeg',
  about: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
  fields: {
    Team: 'Media Technology Division',
    Phone: '03-6409-6805',
    Title: 'Division VPoE | Engineering Manager',
    Email: 'takuto_kd@nyle.co.jp',
    Sits: 'JRE Higashigotanda 1-chome Building, 8th floor',
    Birthday: 'September 1, 1990',
  },
}

export default function Profile() {
  return (
      <>
        {/* Description list */}
        <div id={"main"} className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            {Object.keys(profile.fields).map((field) => (
                <div key={field} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">{field}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{profile.fields[field]}</dd>
                </div>
            ))}
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd
                  className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                  dangerouslySetInnerHTML={{ __html: profile.about }}
              />
            </div>
          </dl>
        </div>
      </>
  )
}
