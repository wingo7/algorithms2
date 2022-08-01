import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

const convertData = (users: User[], accounts: Account[], images: Image[]): Row[] => {
    return users.reduce((rows: Row[], user) => {
        const account = accounts.find((account) => account.userID === user.userID);
        const image = images.find((image) => image.userID === user.userID);
        const row = {
            avatar: image.url,
            username: user.username,
            country: user.country,
            name: user.name,
            lastPayments: account.payments.reduce((acc, payment) => acc + payment.totalSum, 0),
            posts: account.posts,
        };

        return [...rows, row];
    }, []);
}
const filterFunc = (data: Row[], filters: Filter[]): Row[] => {
    if (!filters.length) {
        return data;
    }
    return data.filter((row) => filters.some((filter) => filter(row)));
}

export type Filter = (row: Row) => boolean;

function App() {
    const [filters, setFilters] = useState<Filter[]>([]);
    const [searchFilter, setSearchFilter] = useState<Filter>(undefined);
    const [initialData, setInitialData] = useState<Row[]>([]);
    const [filteredData, setFilteredData] = useState<Row[]>([]);

    useEffect(() => {
        setFilteredData(filterFunc(initialData, searchFilter ? [...filters, searchFilter] : [...filters]));
    }, [filters, initialData, searchFilter])

    useEffect(() => {
        // fetching data from API
        Promise.all([getImages(), getUsers(), getAccounts()]).then(
            ([images, users, accounts]: [Image[], User[], Account[]]) => {
                const rows = convertData(users, accounts, images);
                setFilteredData(rows);
                setInitialData(rows);
            }
        );
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <div className="App">
                <div className={styles.container}>
                    <div className={styles.sortFilterContainer}>
                        <Filters updateStore={setFilters} />
                        <Sort store={filteredData} updateStore={setFilteredData} />
                    </div>
                    <Search updateStore={(f) => setSearchFilter(() => f)} />
                </div>
                <Table rows={filteredData} />
            </div>
        </StyledEngineProvider>
    );
}

export default App;
