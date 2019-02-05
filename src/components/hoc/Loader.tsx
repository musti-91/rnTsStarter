import * as React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

/**
 * @type High order component
 * @Example
 * @TODO: not test it yet.
 */

interface IProps {
  loading: boolean
}
/**
 *
 * @param WrappedComponent any
 */
const Loader = (WrappedComponent: any) => {
  return class WrappedComponent extends React.Component<IProps> {
    state = {
      loading: true
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState(() => ({
          loading: false
        }))
      }, 2000)
    }

    /**
     * render component
     */
    render() {
      const { loading } = this.state
      return (
        <SafeAreaView>
          {loading && <Text>Loading Content...</Text>}
          {!loading && <WrappedComponent {...this.props} />}
        </SafeAreaView>
      )
    }
  }
}

export default Loader
