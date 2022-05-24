import * as PropTypes from 'prop-types';
import { useERC777 } from '../source';
import { useEvm } from '@decentology/hyperverse-evm';
import { useEffect, useState } from 'react';

export const GetBalance = ({ balance, ...props }) => {
	const erc777 = useERC777();
	const { address } = useEvm();
	const [data, setData] = useState(balance);

	useEffect(() => {
		if (erc777.getBalance) {
			erc777.getBalance().then(setData);
		}
	}, [erc777.getBalance]);

	const balanceAvailable = () => {
		return data ? (
			<p>{data}</p>
		) : (
			<p>This is not a valid address.</p>
		);
	};

	return <div className="balance"> Balance: {balanceAvailable()}</div>;
};

GetBalance.propTypes = {};

GetBalance.defaultProps = {};
