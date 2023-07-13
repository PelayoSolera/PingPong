import React from 'react'

function UserDetails({userInfo}) {
  return (
    <div>
            {userInfo ? (
              <div>
                <p>
                  <p>
                    {userInfo.firstname} {userInfo.lastname}
                  </p>
                  <p>{userInfo.email}</p>
                </p>
              </div>
            ) : (
              <div>
                <p>Edgar J</p>
                <p>@_KathatrinaBernier</p>
              </div>
            )}

            <p>
              <b>$ 1,681</b>
              <br />
              <span>Account Balance</span>
            </p>
          </div>
  )
}

export default UserDetails