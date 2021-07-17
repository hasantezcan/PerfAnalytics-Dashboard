import { useMetricContext } from '~/context/MetricProvider'

import EntriesWidget from '~/components/EntriesWidget'

function Entries() {
  const { metrics } = useMetricContext()

  return <EntriesWidget metrics={metrics} />
}

export default Entries
