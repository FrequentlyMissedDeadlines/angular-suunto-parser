describe('DM5 XML Parser', function() {

    var DM5Parser;
    var scope;

    var sampleXml = '<Dive xmlns="http://schemas.datacontract.org/2004/07/Suunto.Diving.Dal" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><Algorithm i:nil="true" /><AltitudeMode>0</AltitudeMode><AscentMode>0</AscentMode><AscentTime i:nil="true" /><AvgDepth>6.02</AvgDepth><BatteryLevel>2.8</BatteryLevel><Boat i:nil="true" /><BottomTemperature>16</BottomTemperature><BottomTime i:nil="true" /><CnsEnd>0</CnsEnd><CnsStart>0</CnsStart><CylinderVolume>12</CylinderVolume><CylinderWorkPressure>232000</CylinderWorkPressure><Deleted i:nil="true" /><DeltaPressure i:nil="true" /><DesaturationTime i:nil="true" /><DiveMixtures /><DiveNumberInSerie>10</DiveNumberInSerie><DiveSamples><Dive.Sample><AveragedTemperature>15.9999943</AveragedTemperature><Ceiling i:nil="true" /><Depth>1.48</Depth><GasTime i:nil="true" /><Heading i:nil="true" /><Pressure i:nil="true" /><SacRate i:nil="true" /><Temperature>15.9999943</Temperature><Time>0</Time></Dive.Sample><Dive.Sample><AveragedTemperature>15.9999943</AveragedTemperature><Ceiling i:nil="true" /><Depth>2.48</Depth><GasTime i:nil="true" /><Heading i:nil="true" /><Pressure i:nil="true" /><SacRate i:nil="true" /><Temperature>15.9999943</Temperature><Time>2</Time></Dive.Sample></DiveSamples><DiveTags /><DiveTime i:nil="true" /><DivingDaysInRow>0</DivingDaysInRow><Duration>72</Duration><EndPressure i:nil="true" /><EndTemperature>16</EndTemperature><HighSwitchPoint i:nil="true" /><LastDecoStopDepth>3</LastDecoStopDepth><LowSetPoint i:nil="true" /><LowSwitchPoint i:nil="true" /><Marks><Mark><Heading i:nil="true" /><MarkTime>0</MarkTime><Type>257</Type></Mark><Mark><Heading i:nil="true" /><MarkTime>72</MarkTime><Type>19</Type></Mark></Marks><Master i:nil="true" /><MaxDepth>6.92</MaxDepth><MaxGf i:nil="true" /><MinGf i:nil="true" /><Mode>3</Mode><Note /><OlfEnd>0</OlfEnd><OtuEnd>0</OtuEnd><OtuStart>0</OtuStart><Partner i:nil="true" /><PersonalMode>0</PersonalMode><PressureBlob i:nil="true" /><PreviousMaxDepth>0</PreviousMaxDepth><ProfileBlob i:nil="true" /><SampleBlob></SampleBlob><SampleInterval>2</SampleInterval><SerialNumber>00000000</SerialNumber><SetPoint i:nil="true" /><Software>1.0.0</Software><Source>D4f</Source><StartPressure i:nil="true" /><StartTemperature>16</StartTemperature><StartTime>2020-01-04T09:16:54</StartTime><SurfacePressure>104300</SurfacePressure><SurfaceTime>120</SurfaceTime><TemperatureBlob i:nil="true" /><TimeFromReset i:nil="true" /><TissuePressuresHeliumEnd xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><TissuePressuresHeliumEndBlob i:nil="true" /><TissuePressuresHeliumStart xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><TissuePressuresHeliumStartBlob i:nil="true" /><TissuePressuresNitrogenEnd xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><TissuePressuresNitrogenEndBlob i:nil="true" /><TissuePressuresNitrogenStart xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><TissuePressuresNitrogenStartBlob i:nil="true" /><Visibility>0</Visibility><Weather>0</Weather><Weight>0</Weight></Dive>';
    var sampleXmlSingleSample = '<Dive xmlns="http://schemas.datacontract.org/2004/07/Suunto.Diving.Dal" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><Algorithm i:nil="true" /><AltitudeMode>0</AltitudeMode><AscentMode>0</AscentMode><AscentTime i:nil="true" /><AvgDepth>6.02</AvgDepth><BatteryLevel>2.8</BatteryLevel><Boat i:nil="true" /><BottomTemperature>16</BottomTemperature><BottomTime i:nil="true" /><CnsEnd>0</CnsEnd><CnsStart>0</CnsStart><CylinderVolume>12</CylinderVolume><CylinderWorkPressure>232000</CylinderWorkPressure><Deleted i:nil="true" /><DeltaPressure i:nil="true" /><DesaturationTime i:nil="true" /><DiveMixtures /><DiveNumberInSerie>10</DiveNumberInSerie><DiveSamples><Dive.Sample><AveragedTemperature>15.9999943</AveragedTemperature><Ceiling i:nil="true" /><Depth>1.48</Depth><GasTime i:nil="true" /><Heading i:nil="true" /><Pressure i:nil="true" /><SacRate i:nil="true" /><Temperature>15.9999943</Temperature><Time>0</Time></Dive.Sample></DiveSamples><DiveTags /><DiveTime i:nil="true" /><DivingDaysInRow>0</DivingDaysInRow><Duration>72</Duration><EndPressure i:nil="true" /><EndTemperature>16</EndTemperature><HighSwitchPoint i:nil="true" /><LastDecoStopDepth>3</LastDecoStopDepth><LowSetPoint i:nil="true" /><LowSwitchPoint i:nil="true" /><Marks><Mark><Heading i:nil="true" /><MarkTime>0</MarkTime><Type>257</Type></Mark><Mark><Heading i:nil="true" /><MarkTime>72</MarkTime><Type>19</Type></Mark></Marks><Master i:nil="true" /><MaxDepth>6.92</MaxDepth><MaxGf i:nil="true" /><MinGf i:nil="true" /><Mode>3</Mode><Note /><OlfEnd>0</OlfEnd><OtuEnd>0</OtuEnd><OtuStart>0</OtuStart><Partner i:nil="true" /><PersonalMode>0</PersonalMode><PressureBlob i:nil="true" /><PreviousMaxDepth>0</PreviousMaxDepth><ProfileBlob i:nil="true" /><SampleBlob></SampleBlob><SampleInterval>2</SampleInterval><SerialNumber>00000000</SerialNumber><SetPoint i:nil="true" /><Software>1.0.0</Software><Source>D4f</Source><StartPressure i:nil="true" /><StartTemperature>16</StartTemperature><StartTime>2020-01-04T09:16:54</StartTime><SurfacePressure>104300</SurfacePressure><SurfaceTime>120</SurfaceTime><TemperatureBlob i:nil="true" /><TimeFromReset i:nil="true" /><TissuePressuresHeliumEnd xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><TissuePressuresHeliumEndBlob i:nil="true" /><TissuePressuresHeliumStart xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><TissuePressuresHeliumStartBlob i:nil="true" /><TissuePressuresNitrogenEnd xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><TissuePressuresNitrogenEndBlob i:nil="true" /><TissuePressuresNitrogenStart xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><TissuePressuresNitrogenStartBlob i:nil="true" /><Visibility>0</Visibility><Weather>0</Weather><Weight>0</Weight></Dive>';

    var sampleXmlFile = new File([sampleXml], "testFile.txt", {
        type: "text/xml",
    });
    var sampleXmlSingleSampleFile = new File([sampleXmlSingleSample], "testFile.txt", {
        type: "text/xml",
    });

    beforeEach(function(){
        module('fmd.suunto.parser');
        inject(function($injector){
            DM5Parser = $injector.get('DM5Parser');
            $rootScope = $injector.get('$rootScope');
            scope = $rootScope.$new();
        });
    });

    it('Should parse a simple file', function(done) {
        expect(DM5Parser).toBeDefined();

        DM5Parser.parseFiles([sampleXmlFile], scope).then(function(result) {
            expect(result.length).toEqual(1);
            expect(result[0].Dive.Duration).toEqual(72);
            expect(result[0].Dive.MaxDepth).toEqual(6.92);
            expect(result[0].Dive.StartTime).toEqual(new Date('2020-01-04T09:16:54'));
            expect(result[0].Dive.StartTemperature).toEqual(16);
            expect(result[0].Dive.BatteryLevel).toEqual(2.8);
            expect(result[0].Dive.AvgDepth).toEqual(6.02);
            expect(result[0].Dive.DiveSamples['Dive.Sample'].length).toEqual(2);
            expect(result[0].Dive.DiveSamples['Dive.Sample'][0].Time).toEqual(0);
            expect(result[0].Dive.DiveSamples['Dive.Sample'][1].Time).toEqual(2);
            done();
        });
        
    });

    it('Should conceal Serial Number', function(done) {
        DM5Parser.parseFiles([sampleXmlFile], scope).then(function(result) {
            expect(result.length).toEqual(1);
            expect(result[0].Dive.SerialNumber).toEqual('XXXXXXXX');
            
            done();
        });
    });

    it('Should convert Dive.Sample from Object to Array', function (done) {
        DM5Parser.parseFiles([sampleXmlSingleSampleFile], scope).then(function(result) {
            expect(result.length).toEqual(1);
            expect(result[0].Dive.DiveSamples['Dive.Sample'].length).toEqual(1);
            
            done();
        });
    });
});