export class AppSettings 
{
    //private//


    private static SERVERIP = 'http://192.168.0.125//';

    private static LOCALPROXY = AppSettings.SERVERIP + 'LocalProxy.svc//';

    private static DATABASE_GETSETTING = AppSettings.LOCALPROXY + 'WENDY-PC//getParameter//';
    private static DATABASE_SETSETTING = AppSettings.LOCALPROXY + 'WENDY-PC//setParameter//';


    //public//
    public static DATABASE_GET_BUFFER_SETTING = AppSettings.DATABASE_GETSETTING + 'TempBuffer';
    public static DATABASE_SET_BUFFER_SETTING = AppSettings.DATABASE_SETSETTING + 'TempBuffer';

    public static DATABASE_GET_WATER_SETTING = AppSettings.DATABASE_GETSETTING + 'TempWater';
    public static DATABASE_SET_WATER_SETTING = AppSettings.DATABASE_SETSETTING + 'TempWater';

    public static DATABASE_GET_T1_H_MAX_SETTING = AppSettings.DATABASE_GETSETTING + 'Temp_T1_H_max';
    public static DATABASE_SET_T1_H_MAX_SETTING = AppSettings.DATABASE_SETSETTING + 'Temp_T1_H_max';
    public static DATABASE_GET_T1_H_MIN_SETTING = AppSettings.DATABASE_GETSETTING + 'Temp_T1_H_min';
    public static DATABASE_SET_T1_H_MIN_SETTING = AppSettings.DATABASE_SETSETTING + 'Temp_T1_H_min';
    public static DATABASE_GET_T1_M_MAX_SETTING = AppSettings.DATABASE_GETSETTING + 'Temp_T1_M_max';
    public static DATABASE_SET_T1_M_MAX_SETTING = AppSettings.DATABASE_SETSETTING + 'Temp_T1_M_max';
    public static DATABASE_GET_T1_M_MIN_SETTING = AppSettings.DATABASE_GETSETTING + 'Temp_T1_M_min';
    public static DATABASE_SET_T1_M_MIN_SETTING = AppSettings.DATABASE_SETSETTING + 'Temp_T1_M_min';


    public static THERMOMETER01_ENDPOINT = 'http://192.168.0.153/';
    public static THERMOMETER02_ENDPOINT = 'http://192.168.0.155/';

 }