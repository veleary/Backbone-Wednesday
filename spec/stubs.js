
// Stub out _.getTemplate so view initialization works
_.getTemplate = sinon.stub(_, 'getTemplate');
_.getTemplate.returns(_.identity);
