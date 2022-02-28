import React from 'react'

const ActivityContext = React.createContext()

const ActivityProvider = ({children}) => {
    const [activiy, setActiviy] = React.useState(true)

    return(
        <ActivityContext.Provider value={{activity, setActiviy}}>
            {children}
        </ActivityContext.Provider>
    )

}