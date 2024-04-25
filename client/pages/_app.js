import NextNProgress from 'nextjs-progressbar'
import '../src/styles/global.scss';
// import { AuthProvider } from '@/context/AuthContext';

const App = ({ Component, pageProps }) => {
	return ( <>
			<NextNProgress
				color='#E71F2A'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			{/* <AuthProvider> */}
				<Component {...pageProps} />
			{/* </AuthProvider> */}
        </>
	)
}
export default App