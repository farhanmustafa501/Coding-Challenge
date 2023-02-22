import { useQuery } from '@apollo/client';
import { Table } from 'react-bootstrap';
import { GET_USERS } from '../../services/general.services';
import classes from './Home.module.scss'

const Home = (): JSX.Element => {
    let { loading, error, data } = useQuery(GET_USERS)
    if (loading) return <p className={classes.message}>Loading...</p>;
    if (error) return <p className={classes.message}>Error : {error.message}</p>;
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <h4 className={classes.heading} >Top 10 Repositories</h4>
                {data?.search?.edges?.map(({ node, index }: any) => {
                    return (
                        <Table className={classes.itemWrapper}>
                            <tr>
                                <td className={classes.lable}>Repository:</td>
                                <td>{node?.name}</td>
                            </tr>
                            <tr>
                                <td className={classes.lable}>Owner:</td>
                                <td>{node?.owner?.login}</td>
                            </tr>
                            <tr>
                                <td className={classes.lable}>URL:</td>
                                <td><a target='_blank' href={node?.url}>{node?.url}</a></td>
                            </tr>
                        </Table>
                    )
                }

                )}

            </div>
        </div>
    )
}
export default Home;