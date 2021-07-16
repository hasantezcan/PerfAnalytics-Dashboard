import AppProviders from '~/context/AppProviders'
import Main from '~/routes/Main'
import '~/styles/App.less'

function App() {
  return (
    <AppProviders>
      <Main />
    </AppProviders>
  )
}

export default App
