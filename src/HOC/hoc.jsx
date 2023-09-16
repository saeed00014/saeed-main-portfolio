import React from 'react'
import styles from '../styles'

const HocWraper = (Component, idName) =>   
function HOC() {
  return (
    <section className={`${styles.paddingX} flex h-full w-full`}>
      <Component />
    </section>
  )
}

export default HocWraper