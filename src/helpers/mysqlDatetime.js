const mysqlDatetime = () => new Date().toISOString().split('.')[0].replace('T', ' ');

export default mysqlDatetime;
