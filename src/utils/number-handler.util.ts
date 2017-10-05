/**
 * @class NumberHandlerUtil
 * @see npm @qsdt/common
 * @author arthmoeros (Arturo Saavedra) artu.saavedra@gmail.com
 * 
 * Class with static util methods for number handling
 * 
 */
export class NumberHandlerUtil{
	
    /**
     * Generates a pseudorandom between low and high values inclusive
     * @param low 
     * @param high 
     */
    public static randomIntInc(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
}