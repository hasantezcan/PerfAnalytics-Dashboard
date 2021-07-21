import { useMetricContext } from '~/context/MetricProvider'

import EntriesWidget from '~/components/EntriesWidget'

function Entries() {
  const { metrics, selectedUrls } = useMetricContext()

  return <EntriesWidget metrics={metrics} selectedUrls={selectedUrls} />
}

export default Entries
