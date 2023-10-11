import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'

const PDFGenerator = () => {
  // Lazily import when rendered on UI

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  })

  return (
    <div className='flex'>
      <div className='flex-1'>
        <Document>
          <Page size='A4' style={styles.page}>
            <View style={styles.section}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quasi ullam sit et
                enim modi quaerat, reiciendis in, ex hic, repellendus beatae ipsa repudiandae dolor
                ducimus doloribus. Quo, ab dolorem.
              </Text>
            </View>
            <View style={styles.section}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque esse totam quae
                voluptatibus laborum! Officiis inventore aut modi ipsum rem at. Veniam distinctio
                delectus eveniet voluptatibus. Quos quasi ab eum!
              </Text>
            </View>
          </Page>
        </Document>
      </div>
      <div className='flex-1'></div>
    </div>
  )
}

export default PDFGenerator
