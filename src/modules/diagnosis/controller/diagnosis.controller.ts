import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('diagnosis')
export class DiagnosisController {
  @Get(':analysisId')
  async analysis(
    @Query('analysisId') analysisId: string,
  ): Promise<AnalysisType> {
    /**
     * Logic to get analysis, I can't show this part of the code
     */
  }

  @Post()
  analisys(
    @Query('symptoms') symptoms: string[],
    @Query('idUser') idUser: string,
  ): Promise<AnalysisSaveType> {
    /**
     * Logic to save the analysis and use the algorithm, I can't show this part of the code
     */
  }
}
