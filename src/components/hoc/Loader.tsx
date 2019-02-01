import * as React from 'react'
import { View, Text } from 'react-native'

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
        <View>
          {loading && <Text>Loading Content...</Text>}
          {!loading && <WrappedComponent {...this.props} />}
        </View>
      )
    }
  }
}

export default Loader
